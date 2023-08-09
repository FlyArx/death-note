import React from 'react';
import { Form, Input } from 'antd';

type Props = {
	name: string;
	placeholder: string;
	type?: string;
	Smessage: string;
};

const SInput = ({ name, placeholder, type = 'text', Smessage }: Props) => {
	return (
		<Form.Item
			name={name}
			shouldUpdate
			rules={[{ required: true, message: Smessage }]}>
			<Input
				placeholder={placeholder}
				type={type}
				size='large'
			/>
		</Form.Item>
	);
};

export default SInput;
