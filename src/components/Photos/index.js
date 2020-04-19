import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { StyledPhotos } from './styles';

const Photos = ({ photos }) => {
	const [mainPhoto, setMainPhoto] = useState();
	const [acc, setAcc] = useState(0);
	const slideEl = useRef();
	const itemEl = useRef();

	useEffect(() => {
		if (photos.length) {
			setMainPhoto({
				url: photos[0].url,
				title: photos[0].title,
			});
		}
	}, [photos]);

	useEffect(() => {
		slideEl.current.scroll({
			left: acc,
			behavior: 'smooth',
		});
	}, [acc]);

	const handleClick = (e, photo) => {
		e.preventDefault();
		setMainPhoto(photo);
	};

	const next = () => {
		const itemElWidth = itemEl.current.getBoundingClientRect().width;
		const slideElWidth = slideEl.current.getBoundingClientRect().width;
		const slideWidth = photos.length * itemElWidth;

		if (acc >= slideWidth) {
			return;
		}

		setAcc(acc + slideElWidth);
	};

	const prev = () => {
		const slideElWidth = slideEl.current.getBoundingClientRect().width;

		if (acc <= 0) {
			return;
		}

		setAcc(acc - slideElWidth);
	};

	return (
		<StyledPhotos>
			<figure>
				<img src={mainPhoto?.url} alt={mainPhoto?.title} />
			</figure>

			<div>
				<FiChevronLeft onClick={() => prev()} />
				<ul ref={slideEl}>
					{photos.map((photo) => (
						<a
							role="button"
							href=""
							key={photo.id}
							onClick={(e) => handleClick(e, photo)}
							onKeyPress={(e) => handleClick(e, photo)}
							ref={itemEl}
						>
							<img src={photo.thumbnailUrl} alt={photo.title} />
						</a>
					))}
					<FiChevronRight onClick={() => next()} />
				</ul>
			</div>
		</StyledPhotos>
	);
};

Photos.propTypes = {
	photos: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			url: PropTypes.string,
			title: PropTypes.string,
		})
	),
};

Photos.defaultProps = {
	photos: [],
};

export default Photos;
