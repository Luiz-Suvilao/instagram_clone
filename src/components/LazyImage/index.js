import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import { Small, OriginalImage } from './styles';

const OriginalImageAnimated = Animated.createAnimatedComponent(OriginalImage);

const LazyImage = ({
	smallSource,
	source,
	aspectRatio,
	shouldLoad
}) => {
	const opacity = new Animated.Value(0);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (shouldLoad) {
			setLoaded(true);
		}

	}, [shouldLoad]);

	function handleAnimate() {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start();
	}

	return (
		<Small
			source={ smallSource }
			ratio={ aspectRatio }
			resizeMode="contain"
			blurRadius={ 2 }
		>
			{ loaded && <OriginalImageAnimated
				style={ { opacity } }
				source={ source}
				ratio={ aspectRatio }
				resizeMode="contain"
				onLoadEnd={ handleAnimate }
			/> }
		</Small>
	);
}

export default LazyImage;