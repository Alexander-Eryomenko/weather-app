import { useCallback, useMemo, useState } from 'react';

import {useDispatch, useSelector} from 'react-redux';

import { Box } from '@mui/material';

import { FormattedMessage } from 'react-intl';

import { removeItemFromWishList } from '../../store/wishList/actions';
import { switchModal } from '../../store/app/actions';

import { selectWishListData } from '../../store/wishList/selectors';
import { selectSwitchModal } from '../../store/app/selectors';

import { useTheme } from '../../hooks/hooks';

import WishListItem from '../WishListItem/WishListItem';
import ModalComponent from '../ModalComponent/ModalComponent';

import { TITLE_COLOR_LIGHT, TITLE_COLOR_DARK } from '../../constants/constantsTheme';

import './WishList.scss';

const WishList = () => {
	const wishListData = useSelector(selectWishListData);
	const isModalOpen = useSelector(selectSwitchModal);
	const [itemId, setItemId] = useState(null);
	const dispatch = useDispatch();

	const isEmptyWishListData = useMemo(() => {
		return wishListData.length > 0 ? true : false;
	}, [wishListData]);

	const selectedItem = useMemo(() => {
		return wishListData.find(item => {
			return item.id === itemId;
		});
	}, [itemId, wishListData]);

	const openModalHandler = useCallback((id) => {
		dispatch(switchModal(true));
		setItemId(id);
	}, [dispatch]);

	const closeModalHandler = useCallback(() => {
		dispatch(switchModal(false));
	}, [dispatch]);

	const removeSportEventHandler = useCallback(() => {
		dispatch(removeItemFromWishList(itemId));
		dispatch(switchModal(false));
	}, [dispatch, itemId]);

	const titleClasses = useTheme(TITLE_COLOR_LIGHT, TITLE_COLOR_DARK, 'wish-list__title title-fonts');

	return (
		<Box className="wish-list">

			{isModalOpen &&
				<ModalComponent
					onRemove={removeSportEventHandler}
					onCancel={closeModalHandler}
					title="Remove"
					cancelBtnText="Cancel"
					removeBtnText="Remove"
					sportEventTitle={selectedItem?.match}
				/>}
			{isEmptyWishListData ? <div
					className={titleClasses}
				>
					<FormattedMessage id='wish_list_title'/>
			</div>
				:<div
					className={titleClasses}
				>
					<FormattedMessage id='wish_list_empty'/>
				</div> }
			<Box className="wish-list__items-box">
				{wishListData.map((item) => {
					return <WishListItem onOpenModal={openModalHandler} wishData={item} key={item.id}/>;
				})}
			</Box>
		</Box>
	);
};

export default WishList;
