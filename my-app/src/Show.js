export function Show(props) {
    const {date} = props;
    const {time} = props;
    const {location} = props;
    const {title} = props;

    return (
        <div id="show-bar">
            <h3>{date}</h3>
            <h3>{location}</h3>
            <h3>{title}</h3>
            <h3>{time}</h3>
        </div>
    );

}