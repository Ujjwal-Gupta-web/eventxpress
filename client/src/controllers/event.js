const base = "https://api-event-express.herokuapp.com";

export const host_event = async (obj) => {
  const res = await fetch(`${base}/event/`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      "token": localStorage.getItem("user")
    },
  });
  const ans = await res.json();
  return ans;
};

export const get_events = async () => {
  const res = await fetch(`${base}/event/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

export const get_event_by_id = async (obj) => {
  const res = await fetch(`${base}/event/${obj.event_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};
