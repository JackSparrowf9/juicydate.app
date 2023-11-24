import { promises as fs } from "fs";
import fetch from "node-fetch";

export async function authAccount() {
  try {
    const file = await fs.readFile(process.cwd() + "/app/account.json", "utf8");

    const account = JSON.parse(file);
    const { client_id, api_key, access_token, expires_in } = account;
    let isExpires = Date.now() >= Date.now() + expires_in;
    // console.log(isExpires);

    if (!isExpires) return { auth: true, access_token };

    const response = await fetch(
      "https://api.imonetizeit.com/v1/auth/session",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: client_id,
          api_key: api_key,
        }),
      }
    );
    if (!response.ok) return { auth: false, access_token: null };

    const data = await response.json();
    if (!data.access_token && !data.expires_in)
      return { auth: false, access_token: null };

    const newAccountData = Object.assign(account, data);

    fs.writeFile(
      process.cwd() + "/app/account.json",
      JSON.stringify(newAccountData),
      {
        encoding: "utf8",
        flag: "w",
        mode: 0o666,
      },
      (err) => {
        if (err) console.log(err);
        else {
          console.log("File written successfully\n");
        }
      }
    );
    return { auth: true, access_token: data.access_token };
  } catch (error) {
    return { auth: false, access_token: null };
  }
}

export async function getDomain() {
  try {
    const getAuth = await authAccount();
    // console.log(getAuth);

    const { auth, access_token } = getAuth;
    if (!auth) return await getDomainFromFile();

    const response = await fetch(
      `https://api.imonetizeit.com/v1/vertical/6/domains?access_token=${access_token}`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );
    if (!response.ok) return await getDomainFromFile();

    const domains = await response.json();
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];

    await shouldUpdateDomainData(domains);

    return randomDomain.url;
  } catch (error) {
    return await getDomainFromFile();
  }
}

export async function getDomainFromFile() {
  const default_domain = "https://njrkq.llovedatng.com";
  try {
    const file = await fs.readFile(process.cwd() + "/app/domain.json", "utf8");
    const data = JSON.parse(file);
    if (!data) return default_domain;
    const { domains } = data;
    if (!domains || domains.length === 0) return default_domain;

    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    if (!randomDomain && !randomDomain.url) return default_domain;
    return randomDomain.url;
  } catch (error) {
    return default_domain;
  }
}

export async function shouldUpdateDomainData(domains) {
  try {
    const WEEK_IN_MILISECOND = 60 * 60 * 1000 * 24 * 7;
    if (!domains || domains.length === 0) {
      console.log("domain is empty");
      return;
    }

    const file = await fs.readFile(process.cwd() + "/app/domain.json", "utf8");
    const data = JSON.parse(file);
    const needUpdateDomain = Date.now() - data.updatedAt > WEEK_IN_MILISECOND;
    if (needUpdateDomain) {
      const newDomainData = Object.assign(data, {
        updatedAt: Date.now(),
        domains: domains,
      });
      fs.writeFile(
        process.cwd() + "/app/domain.json",
        JSON.stringify(newDomainData),
        {
          encoding: "utf8",
          flag: "w",
          mode: 0o666,
        },
        (err) => {
          if (err) console.log(err);
          else {
            console.log("File written successfully\n");
          }
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
}
