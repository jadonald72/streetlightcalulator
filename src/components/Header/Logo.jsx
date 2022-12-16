
import { Link } from 'react-router-dom';

 function Logo() {
  return (
      <div className="logo flex-fill p-3">
        <Link to="/">
          <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0799 0.279999H16.9299V11.64H19.0799V0.279999Z" />
            <path d="M19.0799 34.36H16.9299V45.72H19.0799V34.36Z" />
            <path d="M23.5001 0.279999H21.3501V11.64H23.5001V0.279999Z"/>
            <path d="M23.5001 34.36H21.3501V45.72H23.5001V34.36Z" />
            <path d="M27.92 0.279999H25.77V11.64H27.92V0.279999Z" />
            <path d="M27.92 34.36H25.77V45.72H27.92V34.36Z" />
            <path d="M30.5796 31.5758L29.5049 33.438L39.3439 39.1163L40.4186 37.2541L30.5796 31.5758Z"/>
            <path d="M1.07052 14.5374L-0.00415039 16.3996L9.83489 22.0778L10.9096 20.2157L1.07052 14.5374Z" />
            <path d="M32.7971 27.7473L31.7224 29.6095L41.5615 35.2877L42.6361 33.4256L32.7971 27.7473Z" />
            <path d="M3.28805 10.7089L2.21338 12.571L12.0524 18.2493L13.1271 16.3872L3.28805 10.7089Z" />
            <path d="M5.50046 6.87168L4.42578 8.73383L14.2648 14.4121L15.3395 12.55L5.50046 6.87168Z" />
            <path d="M35.0137 23.9169L33.9387 25.7789L43.7768 31.4589L44.8518 29.5969L35.0137 23.9169Z" />
            <path d="M43.7731 14.5511L33.9341 20.2294L35.0088 22.0915L44.8478 16.4132L43.7731 14.5511Z" />
            <path d="M14.2565 31.5815L4.41748 37.2598L5.49215 39.1219L15.3312 33.4437L14.2565 31.5815Z" />
            <path d="M12.048 27.749L2.20898 33.4272L3.28366 35.2894L13.1227 29.6111L12.048 27.749Z" />
            <path d="M41.5597 10.7099L31.7207 16.3882L32.7954 18.2503L42.6344 12.572L41.5597 10.7099Z" />
            <path d="M9.83953 23.9164L0.000488281 29.5947L1.07516 31.4569L10.9142 25.7786L9.83953 23.9164Z" />
            <path d="M39.351 6.87732L29.512 12.5556L30.5866 14.4177L40.4257 8.73946L39.351 6.87732Z" />
          </svg>
        </Link>
      </div>
  );
}

export default Logo;