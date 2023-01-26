import "./main.css"
import Cardshop from "./cardshop"
export default function Main() {
    return (
        <div>
            <div className="container">
                <div className="body d-flex flex-wrap justify-content-evenly">
                    <div className="nav-filter">
                        <nav className="d-flex justify-content-between">
                            <ul className="">
                                <li><a href="#" class="d-block link-dark text-decoration-none show" data-bs-toggle="dropdown" aria-expanded="true"><i className="bi bi-filter-right"></i> فیلتر</a>
                                    <ul className="dropdown-menu text-small shadow" data-popper-placement="top-end">
                                        <li><a className="dropdown-item" href="#">New project...</a></li>
                                        <li><a className="dropdown-item" href="#">Settings</a></li>
                                        <li><a className="dropdown-item" href="#">Profile</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                                    </ul>
                                </li>|
                                <li><a href="#">ارزان قیمت</a></li>|
                                <li><a href="#">پرفروش ها</a></li>|
                                <li><a href="#">کیفیت بالا</a></li>
                            </ul>
                        </nav>
                    </div>
                    <Cardshop name="دوربین مداربسته" price={500.000} conte={10} model="hb-242-ip" />
                    <Cardshop name="دوربین مداربسته" price={100.000} conte={20} model="hb-52-ip" />
                    <Cardshop name="دوربین مداربسته" price={900.000} conte={30} model="hb-ip" />
                    <Cardshop name="دوربین مداربسته" price={300.000} conte={40} model="hb-34-ip" />
                    <Cardshop name="دوربین مداربسته" price={700.000} conte={50} model="h-ip" />
                    <Cardshop name="دوربین مداربسته" price={200.000} conte={60} model="hb-9ip" />
                    <Cardshop name="دوربین مداربسته" price={600.000} conte={70} model="hb-2-ip" />
                    <Cardshop name="دوربین مداربسته" price={400.000} conte={80} model="12-ip" />
                </div>
            </div>
        </div>
    )
}