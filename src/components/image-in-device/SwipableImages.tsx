import React, { memo, Suspense } from 'react'
import { makeStyles } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = React.lazy(() => import("react-slick"))
const MemoizedSlider = memo(Slider)

function SwipableImages(props) {
  const { projectContent, showMobileImages, autoPlay } = props
  const classes = useStyles();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: autoPlay ? true : false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const ImageComp = ({ imageProps }) => <img
    key={imageProps.url}
    className={classes.imageStyles}
    src={projectContent.images && imageProps.url}
    alt='application' />


  if (!projectContent)
    return null
  return (
    <div
      style={{ position: "absolute", width: '4.9em' }}>
      <Suspense fallback={<div> kayy</div>}>
        <MemoizedSlider
          {...settings}>
          {projectContent.images.map(imageProps => {
            switch (true) {
              case imageProps.device === 'mobile' && showMobileImages:
              case imageProps.device === 'web' && !showMobileImages:
                return <ImageComp key={imageProps} imageProps={imageProps} />
              default:
                return null
            }
          })}
        </MemoizedSlider>
      </Suspense>
    </div>
  )
}


const useStyles = makeStyles(() => ({
  imageContainer: {
    // width: '10em',
    // height: '10em',
  },
  imageStyles: {
    objectFit: 'contain',
    objectPosition: 'center',
    marginTop: '5px',
    height: '10em',
    width: '4.9em',
    overflow: 'hidden',
  },
}));

export default SwipableImages