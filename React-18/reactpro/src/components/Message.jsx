const Message = () => {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Click here to get a message</button>
    </div>
  );
};

export default Message;
