import { Show } from "./Show";
export function Shows(props) {
    return (
        <div id="show-list">
            <Show title={"Title"} location={"Location"} date={"Date"} time={"Time"} />
            <Show title={"EDM Night"} location={"Dukes"} date={"March 1st, 2022"} time={"9:30PM-1:00AM"} />
            <Show title={"EDM Night"} location={"Dukes"} date={"March 25th, 2022"} time={"9:30PM-1:00AM"} />
        </div>
    );
}