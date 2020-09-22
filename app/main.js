const { moment, axios } = Utils;
async function component() {
  const userResponse = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(userResponse.data, moment().format("DD-MM-YYYY"));
  userResponse.data.forEach((user) => {
    const li = document.createElement("li");
    const text = document.createTextNode(user.name);
    li.appendChild(text);
    document.getElementById("users").appendChild(li);
  });
  const date = document.createTextNode(moment().format("[Today is] dddd"));
  document.getElementById("date").appendChild(date);
}
component();
