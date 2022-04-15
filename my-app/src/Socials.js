import instagram from "./images/instagram_logo.png"
import facebook from "./images/facebook_logo.png"
import spotify from "./images/spotify_logo.png"
import soundcloud from "./images/soundcloud_logo.png"
export function Socials(props)
{
    return (
        <div id="socials-div">
            <a class="social-a" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/griff.ith/?hl=en"><img src={instagram} alt="Instagram Link" height="33" /></a>
            <a class="social-a" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/griffin.evans.35"><img src={facebook} alt="Facebook Link" height="33" /></a> 
            <a class="social-a" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/griff.ith/?hl=en"><img src={spotify} alt="Spotify Link" height="33" /></a> 
            <a class="social-a" target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/user-289524886"><img src={soundcloud} alt="Soundcloud Link" height="37" /></a> 
        </div>
    );
}