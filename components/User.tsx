type UserType = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
};

export const User = async ({ id }: { id: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  // fetch from the local server
  const data = await fetch(`http://localhost:3000/api/users/${id}`);
  if (!data.ok)
    throw new Error(
      `Failed to fetch data: ${data.status} ${data.statusText} ${data.url}`,
    );
  const { data: user }: { data: UserType } = await data.json();
  console.log("useruseruse!!!!!!!", user);

  return (
    <div className="py-8">
      <h1 className="text-2xl text-blue-600">User - {user.name} !!!!</h1>
    </div>
  );
};
