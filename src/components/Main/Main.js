import Hero from "../Hero/Hero"
import Kegiatan from "../Kegiatan"
import Tentang from "../Tentang/Tentang"
import "./Main.css"

const Main = () => {
    return (
        <div className="app__main" id="home">
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="app__kegiatan-headtext" id="kegiatan">
                        <h2>Kegiatan</h2>
                    </div>
                </div>
                <div className="app__kegiatan-content">
                    <div className="app__kegiatan-card">
                        <Kegiatan image={require('../../assets/images/logo.jpg')} alt="meditasi" title={'Dhammatalk'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque est eu libero vulputate viverra sed vitae mauris. Nullam vel mi eu urna mollis rhoncus. Phasellus a aliquam felis. Suspendisse nec nisi sapien. Aenean accumsan ligula ut mollis molestie. Etiam lacinia consectetur porta. Sed aliquam rhoncus laoreet. Nunc a quam in enim semper hendrerit sed non diam.'} />
                    </div>
                    <div className="app__kegiatan-card">
                        <Kegiatan image={require('../../assets/images/building.jpg')} alt="abhidhamma" title={'Abhidhamma Class'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque est eu libero vulputate viverra sed vitae mauris. Nullam vel mi eu urna mollis rhoncus. Phasellus a aliquam felis. Suspendisse nec nisi sapien. Aenean accumsan ligula ut mollis molestie. Etiam lacinia consectetur porta. Sed aliquam rhoncus laoreet. Nunc a quam in enim semper hendrerit sed non diam.'} />
                    </div>
                    <div className="app__kegiatan-card">
                        <Kegiatan image={require('../../assets/images/logo.jpg')} alt="retret" title={'Retret Meditasi'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque est eu libero vulputate viverra sed vitae mauris. Nullam vel mi eu urna mollis rhoncus. Phasellus a aliquam felis. Suspendisse nec nisi sapien. Aenean accumsan ligula ut mollis molestie. Etiam lacinia consectetur porta. Sed aliquam rhoncus laoreet. Nunc a quam in enim semper hendrerit sed non diam.'} />
                    </div>
                    <div className="app__kegiatan-card">
                        <Kegiatan image={require('../../assets/images/logo.jpg')} alt="kosong" title={'title4'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque est eu libero vulputate viverra sed vitae mauris. Nullam vel mi eu urna mollis rhoncus. Phasellus a aliquam felis. Suspendisse nec nisi sapien. Aenean accumsan ligula ut mollis molestie. Etiam lacinia consectetur porta. Sed aliquam rhoncus laoreet. Nunc a quam in enim semper hendrerit sed non diam.'} />
                    </div>
                </div>
                <Tentang/>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Main