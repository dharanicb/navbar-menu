import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ul class="container">
    <li class="edit"><a herf="#">File</a></li>
    <li class="hovering edit"><a herf="#">Edit</a>
        <ul class="dropdown-list">
            <li class="menu keyword-list">
                <a href="#">Undo</a>
                <a href="#" class="keywords">cmd Z</a>
                <ul class="subitem">
                    <li><a herf="#">replace</a>
                        <ul class="submenu">
                            <li><a herf="#">File Name</a></li>
                            <hr />
                            <li><a herf="#">Floder Name</a></li>
                        </ul>
                    </li>
                    <hr />
                    <li><a herf="#">Save</a></li>
                    <li><a herf="#">Save AS</a></li>
                    <hr />
                    <li><a herf="#">Delate</a></li>
                </ul>
            </li>
            <li class="keyword-list">
                <a href="#">Redo</a>
                <a href="#" class="keywords">cmd Y</a>
            </li>
            <hr />
            <li class="keyword-list">
                <a href="#" class="copy-color">Cut</a>
                <a href="#" class="keywords">cmd X</a>
            </li>
            <li class="keyword-list">
                <a href="#" class="copy-color">Copy</a>
                <a href="#" class="keywords">cmd C</a>
            </li>
            <li class="keyword-list">
                <a href="#">Paste</a>
                <a href="#" class="keywords">cmd V</a>
            </li>
            <li class="keyword-list">
                <a href="#">Select all</a>
                <a href="#" class="keywords">cmd A</a>
            </li>
            <hr />
            <li class="keyword-list">
                <a href="#">Find and replace</a>
                <a class="keywords">cmd H</a>
            </li>
        </ul>
    </li>
    <li class="edit"><a herf="#">Format</a></li>
    <li class="edit"><a herf="#">View</a></li>
    <li class="edit"><a herf="#">BookMarks</a></li>
    <li class="edit"><a herf="#">Tools</a></li>
    <li class="edit"><a herf="#">Help</a></li>
</ul>
  );
}

export default App;
