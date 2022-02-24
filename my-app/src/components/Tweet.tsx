type TweetProps = {
    tex: string;
};

export function Tweet(props: TweetProps) {
    return (
        <p>{props.text}</p>
    );
}