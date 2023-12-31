import React from 'react';
import { Button, Form } from 'antd';

type Props = {
	children: React.ReactNode;
	htmlType?: 'button' | 'submit' | 'reset';
	type?: 'link' | 'text' | 'default' | 'primary' | 'dashed' | 'ghost';
	danger?: boolean;
	loading?: boolean;
	shape?: 'default' | 'circle' | 'round';
	icon?: React.ReactNode;
	onClick?: () => void;
	style?: {};
	disabled?: boolean;
};

const Sbutton = ({
	children,
	style,
	htmlType = 'button',
	type,
	danger,
	loading,
	icon,
	shape,
	onClick,
	disabled,
}: Props) => {
	return (
		<Form.Item>
			<Button
				htmlType={htmlType}
				type={type}
				danger={danger}
				loading={loading}
				shape={shape}
				icon={icon}
				style={style}
				disabled={disabled}
				onClick={onClick}>
				{children}
			</Button>
		</Form.Item>
	);
};

export default Sbutton;
