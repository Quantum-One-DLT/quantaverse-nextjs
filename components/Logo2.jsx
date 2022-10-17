import * as React from "react"

function SvgLogo2(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={254} height={45} {...props}>
      <defs>
        <linearGradient id="a" x1={2.898} y1={0} x2={95.30299} y2={0}>
          <stop stopColor="#03fff6" offset="0%" />
          <stop stopColor="#00A1FF" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M18.127 29.497c-3.363 5.156-5.037 10.954-5.161 16.799a35.18 35.18 0 00-1.047.584 38.104 38.104 0 016.208-17.383zm77.176 27.138c0 .021-.003.043-.003.065-.093-3.274-2.66-6.282-7.015-8.765A38.141 38.141 0 0182.07 71.76C70.43 89.441 46.662 94.333 28.985 82.696c-4.403-2.899-8.013-7.067-10.771-11.189-.002 0-.005-.507-.008-.507h-.002C8.939 69 3.081 63.362 2.978 57.846c-.08-4.241 3.252-7.965 8.94-11.225.34-.196.691-.264 1.049-.455 4.583-2.437 16.997-4.293 16.997-4.293s-.322 1.005-.411 1.913c-7.06 1.788-12.765 4.33-16.346 7.279.807 6.634 3.57 13.116 8.076 18.551 7.906 2.991 18.979 4.74 31.205 4.512a108.96 108.96 0 0010.242-.661.958.958 0 01-.034-.244c-.029-1.628 3.161-3.008 7.132-3.081 2.62-.048 4.925.481 6.195 1.32a31.33 31.33 0 001.983-2.692c4.663-7.079 6.116-15.391 4.742-23.369-4.089-1.514-8.999-2.697-14.462-3.456a20.116 20.116 0 011.135 6.686c0 11.169-9.055 20.224-20.224 20.224-11.168 0-20.223-9.055-20.223-20.224 0-1.657.199-3.27.578-4.812 0 0-.185.046 0 0 .337 3.995 4.002 7 7.843 7 4.063 0 7.36-3.512 7.36-7.842 0-.136-.003-.274-.011-.409-.002-.09-.011-.18-.019-.271a8.034 8.034 0 00-1.109-3.503c-1.04-1.756-2.718-3.042-4.691-3.485a7.897 7.897 0 00-.621-.111 7.186 7.186 0 00-1.244-.052 7.12 7.12 0 00-4.275 1.67c3.671-5.092 9.657-8.408 16.412-8.408 8.016 0 14.941 4.664 18.214 11.423.002.008.007.056.011.062C73.111 40.809 78.215 42 82.449 44h.012c-1.934-9-7.416-17.315-15.909-22.907a38.223 38.223 0 00-7.633-3.902 4.54 4.54 0 01-.258.425 5.966 5.966 0 01-8.267 1.698 5.969 5.969 0 01-1.703-8.267 5.965 5.965 0 0110.901 2.507 38.261 38.261 0 0111.543 5.122c10.009 6.591 15.922 17.072 17.051 28.136 4.446 2.816 7.048 6.16 7.117 9.823zM15.244 66.719A38.58 38.58 0 0111.77 52.41c-1.795 1.869-2.761 3.882-2.721 5.964.058 3.09 2.315 5.941 6.195 8.345zm56.289 9.211c-.513.059-1.045.093-1.595.104-2.177.04-4.135-.321-5.46-.92-4.689.748-9.729 1.112-14.986 1.21C40.838 76.487 32.725 76 25.774 74h-.003c-.011 0-.023.074-.034.07 1.223 1.054 2.528 2.08 3.915 2.992 13.563 8.928 30.585 8.05 41.881-1.132z"
        fill="url(#a)"
        transform="matrix(.07996 0 0 .07996 0 .035) matrix(8.82353 0 0 8.82353 88.235 88.235) matrix(.54156 0 0 .54156 -1.612 -4.526)"
      />
      <path
        d="M17.933 18.332l-1.282 1.948-1.26-.829c-1.13.4-2.808.417-5.794.447-.579.006-1.112.01-1.605.01-2.935 0-4.41-.155-5.353-1.092-.982-.976-.977-2.412-.969-4.587.01-2.427.015-3.892 1.245-4.801 1.061-.785 2.603-.806 5.98-.851l.674-.01c4.209-.06 5.95-.084 7.035.991.918.91.91 2.226.899 4.218l-.002.461c-.005 1.183-.008 2.037-.132 2.757a4.09 4.09 0 01-.223.82l.787.518zm-8.359-.766c1.095-.01 2.067-.02 2.876-.052l-2.655-1.747 1.283-1.948 4.015 2.643c.07-.524.072-1.302.076-2.233l.002-.466c.007-1.145.014-2.329-.208-2.549-.276-.273-1.513-.336-3.159-.336-.677 0-1.424.01-2.201.022l-.677.009c-2.419.032-4.167.056-4.625.394-.288.213-.293 1.474-.298 2.934-.006 1.356-.01 2.637.28 2.925.455.453 2.914.428 5.291.405zm27.653-9.079l.042 5.7c.017 1.261-.492 2.486-1.433 3.448-.999 1.02-2.941 2.242-6.527 2.268h-.104c-2.715 0-4.982-.779-6.393-2.2-.97-.977-1.495-2.222-1.48-3.507l-.043-5.691 2.348-.018.042 5.717v.013c-.01.662.267 1.295.8 1.832.98.987 2.688 1.521 4.813 1.507 2.167-.016 3.895-.571 4.866-1.563.509-.52.773-1.135.764-1.776v-.009l-.042-5.703zm10.068-.776l9.177 12.19h-2.95l-2.567-3.397h-7.32L41.108 19.9h-2.918zm-1.899 6.445h3.798l-1.899-2.533zM72.48 8.593h2.348v11.25l-13.59-7.098v7.256h-2.348V8.75l13.59 7.098V8.593zm5.69-.118h15.938v2.348h-6.795v9.093h-2.348v-9.093H78.17V8.475zm35.238.012l.042 5.7c.017 1.261-.492 2.486-1.433 3.448-.999 1.02-2.941 2.242-6.527 2.268h-.104c-2.715 0-4.982-.779-6.393-2.2-.97-.977-1.495-2.222-1.48-3.507l-.043-5.691 2.348-.018.042 5.717v.013c-.01.662.267 1.295.8 1.832.98.987 2.688 1.521 4.813 1.507 2.167-.016 3.895-.571 4.866-1.563.509-.52.773-1.135.764-1.776v-.009l-.042-5.703zm11.371 5.576l7.969-5.313V20h-2.348v-6.863l-5.62 3.747-5.622-3.747V20h-2.348V8.75zm35.127-4.414c.918.91.91 2.226.899 4.218l-.003.461c-.004 1.183-.007 2.037-.131 2.757-.106.615-.35 1.5-1.244 2.096-1.132.754-2.823.771-6.528.808-.579.006-1.113.01-1.605.01-2.935 0-4.41-.155-5.354-1.092-.982-.975-.976-2.412-.968-4.587.009-2.427.014-3.892 1.245-4.801 1.061-.785 2.602-.805 5.98-.85l.673-.01c4.21-.06 5.951-.085 7.036.99zm-1.434 4.205c.007-1.145.013-2.329-.209-2.549-.275-.273-1.512-.336-3.158-.336-.677 0-1.424.01-2.202.022l-.676.01c-2.42.032-4.167.055-4.625.393-.289.214-.293 1.475-.299 2.935-.005 1.356-.01 2.636.28 2.925.456.452 2.914.427 5.292.404 2.73-.027 4.702-.047 5.258-.417.327-.218.33-1.352.337-2.921l.002-.466zm19.268-5.261h2.348v11.25l-13.59-7.098v7.256h-2.348V8.75l13.59 7.098V8.593zm21.628 2.358h-13.59v2.187l9.064.033-.008 2.348-9.056-.034v2.179h13.59v2.347h-15.938V8.604h15.938v2.348z"
        fill="#FFF"
        transform="matrix(.07996 0 0 .07996 0 .035) matrix(8.82353 0 0 8.82353 88.235 88.235) matrix(1.36572 0 0 1.36572 67.72 3.469)"
      />
    </svg>
  )
}

export default SvgLogo2

