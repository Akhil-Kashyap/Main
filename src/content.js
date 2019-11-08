import React from 'react';
import style from './content.module.css';

const content = () => {
	return (
		<div className={style.body}>
			<h2 className={style.title}>Tasks</h2>

			<div className={style.cards}>
				<div className={style.todo}>
					<h3> TO DO </h3>
					<p className={style.content}>Title: Lorem Ipsum</p>
					<p className={style.content}>State: In progress</p>
					<p className={style.content}>Due Date: 25-11-2019</p>
					<p className={style.content}>Assigner: XYZ</p>
					<input type="button" value="Submit" className={style.button} />
				</div>

				<div className={style.assigned}>
					<h3> ASSIGNED </h3>
					<p className={style.content}>Title: Lorem Ipsum</p>
					<p className={style.content}>State: In progress</p>
					<p className={style.content}>Due Date: 25-11-2019</p>
					<p className={style.content}>Task assigned to: XYZ</p>
				</div>

				<div className={style.review}>
					<h3> TO REVIEW </h3>
					<p className={style.content}>Title: Lorem Ipsum</p>
					<p className={style.content}>Due Date to review: 25-11-2019</p>
					<p className={style.content}>State: In progress</p>
					<p className={style.content}>Assigner: ABC</p>
				</div>
			</div>

			<input type="button" value="Add New Task" className={style.add} />
		</div>
	);
};

export default content;
