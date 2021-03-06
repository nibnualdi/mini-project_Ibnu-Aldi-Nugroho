import styles from "./SearchPopUpBody.module.css";

const SearchPopUpBody = ({ username, data, inputSearch, setGetName }) => {
  return (
    <>
      {data?.map((message) => {
        const firstIndexSelectedWord = message.messagesText.toLowerCase().search(inputSearch);
        const firstSelectedWord = message.messagesText.toLowerCase().match(inputSearch);

        return (
          <a
            href={`#${message.id}`}
            key={message.id}
            onClick={() => {
              setGetName(
                message.friend.name === username ? message.user.name : message.friend.name
              );
            }}
          >
            <div className={styles.container}>
              {message.friend.name === username ? (
                <h1 className={styles.senderName}>{message.user.name}</h1>
              ) : (
                <h1 className={styles.senderName}>{message.friend.name}</h1>
              )}
              {firstIndexSelectedWord !== -1 && (
                <div className={styles.messagesText} style={{ position: "relative" }}>
                  {message.messagesText}
                  <p
                    className={styles.messagesText}
                    style={{ position: "absolute", top: 0, left: 0, display: "inline-block" }}
                  >
                    {message.messagesText.substr(0, firstIndexSelectedWord)}
                    <span style={{ backgroundColor: "#5f5f5f", display: "inline-block" }}>
                      {firstSelectedWord}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </a>
        );
      })}
    </>
  );
};

export default SearchPopUpBody;
