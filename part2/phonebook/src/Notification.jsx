const Notification = ({ message, errorStatus }) => {
  const errorStyle = {
    margin: "5px 0",
    color: "red",
    fontSize: 16,
    border: "2px solid red",
    backgroundColor: "wheat",
  };

  const notificationStyle = {
    margin: "5px 0",
    color: "green",
    fontSize: 16,
    border: "2px solid green",
    backgroundColor: "wheat",
  };

  if (message === null) {
    return null;
  }

  return (
    <div style={errorStatus ? errorStyle : notificationStyle}>{message}</div>
  );
};

export default Notification;
