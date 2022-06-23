const base = "https://api-event-express.herokuapp.com";

export const auth_user = async (obj) => {
    const res = await fetch(`${base}/user/auth`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const ans = await res.json();
    return ans;
};

export const login_user = async (obj) => {
    const res = await fetch(`${base}/user/login`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const ans = await res.json();
    return ans;
};

export const signup_user = async (obj) => {
    const res = await fetch(`${base}/user/signup`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const ans = await res.json();
    return ans;
};