import ReactDOM from 'react-dom';

import { Box, Button, Divider } from '@mui/material';

import { FormattedMessage } from 'react-intl';

import PropTypes from 'prop-types';

import './ModalComponent.scss';

const Modal = ({sportEventTitle, onRemove, onCancel}) => {
	return (
		<>
			<Box className="backdrop" onClick={onCancel}></Box>
			<Box className="modal">
				<Box className="modal__text-wrapper">
					<div className="modal__text-wrapper__title">
						<FormattedMessage id="modal_title"/>
					</div>
					<Divider />
					<div className="modal__text-wrapper__subtitle">
						{sportEventTitle}
					</div>
				</Box>
				<Box className="modal__btn">
					<Button
						variant="contained"
						color="error"
						onClick={onRemove}
					>
						<FormattedMessage id="modal_remove_btn"/>
					</Button>
					<Button
						variant="contained"
						onClick={onCancel}
					>
						<FormattedMessage id="modal_cancel_btn"/>
					</Button>
				</Box>
			</Box>
		</>
	);
};

const ModalComponent = ({ sportEventTitle, onRemove, onCancel }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Modal
					sportEventTitle={sportEventTitle}
					onRemove={onRemove}
					onCancel={onCancel}
				/>,
				document.getElementById('modal')
			)}
		</>
	);
};

Modal.propTypes = {
	sportEventTitle: PropTypes.string,
	onRemove: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired
};

ModalComponent.propTypes = {
	sportEventTitle: PropTypes.string,
	onRemove: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired
};

export default ModalComponent;
