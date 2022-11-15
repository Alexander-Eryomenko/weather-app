import { LinearProgress, Box } from '@mui/material';

const ProgressComponent = () => {
	const style = {
		box: {
			width: '100%'
		}
	};
	return (
		<Box sx={style.box}>
			<LinearProgress />
		</Box>
	);
};

export default ProgressComponent;
