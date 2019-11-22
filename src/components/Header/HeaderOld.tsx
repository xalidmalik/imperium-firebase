export const HeaderDetails = (props: IHeaderValidation) => {
  return (
    <HeaderWrapper>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-orange-400"
        onClick={() => History.push(props.linkFirst)}
      >
        {props.titleFirst}
      </h2>
      <span className="text-2xl font-bold leading-none mx-2">></span>
      <h2 className="text-2xl font-bold leading-none justify-between">
        {props.titleSecond}
      </h2>
    </HeaderWrapper>
  );
};

export const HeaderEdit = (props: IHeaderValidation) => {
  return (
    <HeaderWrapper>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-orange-400"
        onClick={() => History.push(props.linkFirst)}
      >
        {props.titleFirst}
      </h2>
      <span className="text-2xl font-bold leading-none mx-2">></span>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-orange-400"
        onClick={() => History.push(props.linkSecond)}
      >
        {props.titleSecond}
      </h2>
      <span className="text-2xl font-bold leading-none mx-2 ">></span>
      <h2 className="text-2xl font-bold leading-none justify-between">
        {props.titleThird}
      </h2>
      <button
        type="submit"
        form={props.btnForm}
        className="btn-style-1 ml-auto "
      >
        {props.btnTitle}
      </button>
    </HeaderWrapper>
  );
};

export const HeaderNew = (props: IHeaderValidation) => {
  return (
    <HeaderWrapper>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-orange-400"
        onClick={() => History.push(props.linkFirst)}
      >
        {props.titleFirst}
      </h2>
      <span className="text-2xl font-bold leading-none mx-2">></span>
      <h2 className="text-2xl font-bold leading-none justify-between">
        {props.titleSecond}
      </h2>
      <button
        type="submit"
        form={props.btnForm}
        className="btn-style-1 ml-auto "
      >
        {props.btnTitle}
      </button>
    </HeaderWrapper>
  );
};
