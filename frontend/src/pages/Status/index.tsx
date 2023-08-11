import { Button, Result, Row } from 'antd';
import { Link, useParams } from 'react-router-dom';

const Statuses: Record<string, string> = {
	created: 'Victim create',
	updated: 'Victim Update',
	deleted: 'Victim Remove',
};

export const Status = () => {
	const { status } = useParams();

	return (
		<Row
			align='middle'
			justify='center'
			style={{ width: '100%' }}>
			<Result
				status={status ? 'success' : 404}
				title={status ? Statuses[status] : '404'}
				extra={
					<Button key='dashboard'>
						<Link to='/'>to Main page</Link>
					</Button>
				}
			/>
		</Row>
	);
};
