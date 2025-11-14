import React from 'react'; // Make sure to import React
import { useTranslation } from 'react-i18next';

// 1. Wrap your component in React.forwardRef
const About = React.forwardRef((props, ref) => {
  const { t } = useTranslation(); // Your translation hook logic stays here

  return (
    <>
      {/* 2. Attach the ref from the props to the dialog element */}
      <dialog id="about_modal" className="modal" ref={ref}>
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          {/* All your translation text remains the same */}
          <h3 className="font-bold text-lg">{t('about_title')}</h3>
          <p className="py-4">
            {t('about_description')}
          </p>
          <h4 className="font-bold text-md">{t('The Challenge We Address')}</h4>
          <ul className="list-disc list-inside py-2 space-y-1">
            <li>{t('about_challenge_description')}</li> QA25 ``
            <h4 className="font-bold text-md">{t('How EduBridge Helps')}</h4>
             <li>{t('about_feature_1')}</li>
            <li>{t('about_feature_2')}</li>
            <li>{t('about_feature_3')}</li>
            <li>{t('about_feature_4')}</li>
          </ul>
        </div>
      </dialog>
    </>
  );
}); // End of the forwardRef wrapper

export default About;

// import React from 'react'; // Make sure to import React
// import { useTranslation } from 'react-i18next';

// // 1. Wrap your component in React.forwardRef
// const About = React.forwardRef((props, ref) => {
//   const { t } = useTranslation(); // Your translation hook logic stays here

//   return (
//     <>
//       {/* 2. Attach the ref from the props to the dialog element */}
//       <dialog id="about_modal" className="modal" ref={ref}>
//         <div className="modal-box dark:bg-slate-900 dark:text-white">
//           <form method="dialog">
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//           </form>

//           {/* All your translation text remains the same */}
//           <h3 className="font-bold text-lg">{t('about_title')}</h3>
//           <p className="py-4">
//             {t('about_description')}
//           </p>
//           <h4 className="font-bold text-md">{t('The Challenge We Address')}</h4>
//           <ul className="list-disc list-inside py-2 space-y-1">
//             <li>{t('about_challenge_description')}</li>
//             <h4 className="font-bold text-md">{t('How EduBridge Helps')}</h4>
//              <li>{t('about_feature_1')}</li>
//             <li>{t('about_feature_2')}</li>
//             <li>{t('about_feature_3')}</li>
//             <li>{t('about_feature_4')}</li>
//           </ul>
//         </div>
//       </dialog>
//     </>
//   );
// }); // End of the forwardRef wrapper

// export default About;