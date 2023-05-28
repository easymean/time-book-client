import { IconButton } from '@component/atom/Button';
import { Input } from '@component/atom/Input';
import styles from './style.module.scss';

const AddPage = () => {
	return (
		<div>
			<div className={styles.btnTab}>
				<IconButton>닫기</IconButton>
				<span>등록</span>
				<IconButton>저장</IconButton>
			</div>
			<Input placeholder="내용을 입력하세요" />
		</div>
	);
};

export default AddPage;
