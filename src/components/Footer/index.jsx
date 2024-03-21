import { ArrowLongRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import './Footer.css';

export function Footer() {
  return (
		<div className='footer-container'>
			<div className='footer-inner-container'>
		<button className='payment-button'>
			<p className='payment-text'>Payment</p>
			<ArrowLongRightIcon className='arrow-icon' />
		</button>
		</div>
	</div>
  );
}
