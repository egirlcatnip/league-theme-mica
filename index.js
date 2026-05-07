/* Mica League of legends client theme */
/* Adjusted by egirlcatnip from Selene's acrylic theme */

/* Version: 2.0 */

/* credits: @aimslut(discord), @egirlcatnip(discord), @unproductive(discord) */

/* Emi's fork:      https://github.com/egirlcatnip/acrylic-league-theme      */
/* Selene's source: https://github.com/HerXayah/league-launcher-theme/       */

/* javascript to do stuffs: */

/* apply the acrylic effect */
// #BBGGRRAA
window.Effect.apply("mica");

/* Import the local theme file */
import "./theme.css";

/* Import shadow-dom obeserver-fixer-thing */
import * as observer from "./observer.js";
import * as shadow_dom from "./shadow-dom.js";

/* Code to edit the lobby info panel, leftmost panel, top of friend list */
observer.subscribeToElementCreation(
    "lol-parties-game-info-panel",
    (element) => {
        shadow_dom.lobby_panel_css(element);
    },
);

/* Code to edit the lobby invite notification, leftmost panel, top of friend list */
observer.subscribeToElementCreation("lol-parties-game-invite", (element) => {
    shadow_dom.lobby_invite_css(element);
});
