const Account = (props: { name: string; mbti: string; age?: number }) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};

export default Account;
