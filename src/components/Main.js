import Hero from "./Hero"
import Kegiatan from "./Kegiatan"

const Main = () => {
    return (
        <div className="mb-5">
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h2>Kegiatan</h2>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-4 gy-4 mx-auto">
                    <div className="col-md-3">
                        <Kegiatan image={require('../assets/images/logo.jpg')} title={'title1'} text={'kegiatan 1'} />
                    </div>
                    <div className="col-md-3">
                        <Kegiatan image={require('../assets/images/building.jpg')} title={'title2'} text={'kegiatan 2'} />
                    </div>
                    <div className="col-md-3">
                        <Kegiatan image={require('../assets/images/logo.jpg')} title={'title3'} text={'kegiatan 3'} />
                    </div>
                    <div className="col-md-3">
                        <Kegiatan image={require('../assets/images/logo.jpg')} title={'title4'} text={'kegiatan 4'} />
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Main