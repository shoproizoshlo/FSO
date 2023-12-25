const Notification = ({ message }) => {
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
    <div className="error" style={notificationStyle}>
      {message}
    </div>
  );
};

export default Notification;
