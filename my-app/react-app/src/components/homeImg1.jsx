import { Parallax } from 'react-parallax'
import HomeImg1 from '../images/Home_img_1.jpg'

const imageOne = () => (
  <Parallax bgImage={HomeImg1} strength={800}>
    <div className="content">
      <span className="home-img-1">OneMarket</span>
    </div>
  </Parallax>
)

export default HomeImg1
