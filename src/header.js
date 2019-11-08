import React from 'react';
import style from './header.module.css';
import dp from './dp.png';

const header = () => {
	return (
		<div className={style.info}>
			<div className={style.title}>
				<h1 className={style.name}>PROJECT NAME</h1>
			</div>
			<div className={style.team}>
				<h3>Team Members:</h3>

				<div className={style.teamrole}>
					<div className={style.teammembers}>
						<img src={dp} className={style.image} />
						<h4>ABC</h4>
					</div>
				</div>

				<div className={style.teamrole}>
					<div className={style.teammembers}>
						<img src={dp} className={style.image} />
						<h4>XYZ</h4>
					</div>
				</div>

				<div className={style.teamrole}>
					<div className={style.teammembers}>
						<img src={dp} className={style.image} />
						<h4>PQR</h4>
					</div>
				</div>
				<input type="button" value="Add Members" className={style.add} />
			</div>
		</div>
	);
};

export default header;
