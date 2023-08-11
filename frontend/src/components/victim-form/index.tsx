import { Suiside } from '@prisma/client';
import { Form, Card, Space } from 'antd';
import Sbutton from '../sexy-btn';
import SInput from '../sexy-input';
import errMsg from '../errMsg';
import ErrMsg from '../errMsg';

type Props<T> = {
	onFinish: (values: T) => void;
	btnText: string;
	title: string;
	error?: string;
	victim?: T;
};

const VictimForm = ({
	onFinish,
	title,
	victim,
	btnText,
	error,
}: Props<Suiside>) => {
	return (
		<Card
			title={title}
			style={{ width: '30rem' }}>
			<Form
				name='add-victim'
				onFinish={onFinish}
				initialValues={victim}>
				<SInput
					type='text'
					name='firstName'
					placeholder='Name'
					Smessage='name is require'
				/>
				<SInput
					name='lastName'
					placeholder='Lastname'
					Smessage='lastname is require'
				/>
				<SInput
					type='number'
					name='age'
					placeholder='Age'
					Smessage='age is require'
				/>
				<SInput
					name='reason'
					placeholder='Reason'
					Smessage='reason is require'
				/>
				<Space
					direction='vertical'
					size='large'>
					<ErrMsg message={error} />
					<Sbutton htmlType='submit'>{btnText}</Sbutton>
				</Space>
			</Form>
		</Card>
	);
};

export default VictimForm;
