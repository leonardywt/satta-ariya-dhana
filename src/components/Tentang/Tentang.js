import "./Tentang.css"

const Tentang = () => {
    return (
        <div className="app__tentang" id="tentang">
            <div className="app__tentang-content">
                <h2>Tentang</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque est eu libero vulputate viverra sed vitae mauris. Nullam vel mi eu urna mollis rhoncus. Phasellus a aliquam felis. Suspendisse nec nisi sapien. Aenean accumsan ligula ut mollis molestie. Etiam lacinia consectetur porta. Sed aliquam rhoncus laoreet. Nunc a quam in enim semper hendrerit sed non diam.</p>
            </div>
            <div className="app__tentang-img">
                <img src={require('../../assets/images/logo.jpg')} alt="logo"/>
            </div>
        </div>
    )
}

export default Tentang