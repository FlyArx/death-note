import { Form, Input } from 'antd';
import { NamePath } from 'antd/es/form/interface';

type Props = {
	name?: string;
	placeholder?: string;
	dependencies?: NamePath[];
	Smessage: string;
};

const SInputPass = ({ name, placeholder, dependencies, Smessage }: Props) => {
	return (
		<Form.Item
			name={name}
			dependencies={dependencies}
			hasFeedback
			rules={[
				{ required: true, message: Smessage },
				({ getFieldValue }) => ({
					validator(_, value) {
						if (!value) {
							return Promise.resolve();
						}
						if (name === 'confirmPassword') {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve();
							}
							return Promise.reject(new Error('passwords do not match'));
						} else {
							if (value.length < 6) {
								return Promise.reject(
									new Error('password must be atleast 6 simbols')
								);
							}
							return Promise.resolve();
						}
					},
				}),
			]}>
			<Input.Password
				placeholder={placeholder}
				size='large'
			/>
		</Form.Item>
	);
};

export default SInputPass;
