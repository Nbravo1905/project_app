import icons from './icons';
import images from './images';
import theme, {COLORS, SIZES} from './theme';

function separator(numb) {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return str.join(".");
}

export { icons, images, theme, COLORS, SIZES, separator};