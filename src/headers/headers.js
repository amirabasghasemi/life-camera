
import './headers.css'
export default function Headers() {
    return (
        <div className="container-fluid mt-4">
            <header className="w-100 h-auto p-3 shadow bg-white d-flex flext justify-content-between rounded-4 align-items-center">
                <div>
                    <a href='#'> <img src="logo.png" className="img-header" /></a>
                </div>
                <div className="justify-content-center">
                    <input className="p-2 border-0 input-serch" type="serch" placeholder="جستجو..." />
                    <button className="border-0 bg-white p-2 icon-serch"><i class="bi bi-search"></i></button>
                </div>
                <div className="p-0 ms-4">
                    <a className="btn p-2 btn-sid rounded-2" href="#"><i class="bi bi-bag"></i></a>
                    <a className="btn p-2 btn-sid rounded-2" href="#"><i class="bi bi-heart"></i></a>
                    <a className="btn p-2 btn-login rounded-2" href="#">عضویت <i className="bi bi-person-add icon-login"></i>   |  ورود <i class="bi bi-box-arrow-in-right icon-login"></i></a>
                </div>
            </header>
            <div className="container d-flex justify-content-center">
                <div className="nav-box shadow">
                    <section>
                        <nav className="stroke text-center">
                            <ul>
                                <li><a href="#">خانه</a></li>
                                <li><a href="#">محصولات</a></li>
                                <li><a href="#">درباره ما</a></li>
                                <li><a href="#">پشتیبانی</a></li>
                            </ul>
                        </nav>
                    </section>
                </div>
            </div>
        </div>
    );
}

