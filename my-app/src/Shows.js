import { Show } from "./Show";
export function Shows(props) {
    return (
        <div id="show-list">
            <Show title={"Title"} location={"Location"} date={"Date"} time={"Time"} />
            <Show title={"College Night"} location={"Dukes"} date={"April 19th, 2022"} time={"9:30PM-1:00AM"} />
            <Show title={"College Night"} location={"Dukes"} date={"April 26th, 2022"} time={"9:30PM-1:00AM"} />
        </div>
    );
}