const tweets = [
  { id: 1, text: "Just tweeted with React!" },
  { id: 2, text: "Love coding in JavaScript." },
  // More tweets...
];

const TweetList = () => {
  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <p>{tweet.text}</p>
        </div>
      ))}
    </div>
  );
};
