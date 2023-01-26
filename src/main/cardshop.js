import "./cardshop.css"
export default function Cardshop(props) {
    return (
         props.conte >1 &&
        <div className="box-card">
            <div className="card rounded-0 m-4">
                <img src="1.jpg" className="card-img-top rounded-0" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title m-0">{props.name}</h5>
                    <p className="card-text m-0">مدل : {props.model}</p>
                    <p className="card-text m-0"> قیمت : {props.price} تومان</p>
                    <a href="" className="btn btn-card mt-3">مشاهده وخرید <i class="bi bi-eye"></i></a>
                </div>
            </div>
        </div>
    )
}