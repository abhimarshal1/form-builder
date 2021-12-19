const generateSpacings = (multiplier) => {
  const value = multiplier * 0.5;

  return `
        .m-${multiplier} {
            margin: ${value}rem !important;
        }
  
        .mx-${multiplier} {
            margin-left: ${value}rem !important;
            margin-right: ${value}rem !important;
        }
  
        .my-${multiplier} {
            margin-top: ${value}rem !important;
            margin-bottom: ${value}rem !important;
        }
  
        .mt-${multiplier} {
            margin-top: ${value}rem !important;
        }
  
        .mb-${multiplier} {
            margin-bottom: ${value}rem !important;
        }
  
        .ml-${multiplier} {
            margin-left: ${value}rem !important;
        }
  
        .mr-${multiplier} {
            margin-right: ${value}rem !important;
        }
  
        .p-${multiplier} {
            padding: ${value}rem !important;
        }
  
        .px-${multiplier} {
            padding-left: ${value}rem !important;
            padding-right: ${value}rem !important;
        }
  
        .py-${multiplier} {
            padding-top: ${value}rem !important;
            padding-bottom: ${value}rem !important;
        }
  
        .pt-${multiplier} {
            padding-top: ${value}rem !important;
        }
  
        .pb-${multiplier} {
            padding-bottom: ${value}rem !important;
        }
  
        .pl-${multiplier} {
            padding-left: ${value}rem !important;
        }
  
        .pr-${multiplier} {
            padding-right: ${value}rem !important;
        }
      `;
};

export const getSpacingClasses = () =>
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(generateSpacings).join("");
