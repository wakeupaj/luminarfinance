import React from 'react'
import ReactLoading from 'react-loading'
import { useTheme } from '../context/ThemeContext.jsx';


const Loading = ({ type, color }) => {
	
	const { theme } = useTheme();

	<ReactLoading type="bubbles" color={theme === 'light' ? 'text-light-text' : 'text-text'} height={'20%'} width={'20%'} />
};

export default Loading