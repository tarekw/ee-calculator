import React from 'react';
import { shallow } from 'enzyme';
import Calculator, {
  operators,
} from './Calculator';

const simulateClick = (wrapper, ...args) => {
  wrapper.simulate('click', ...args);
}

it('should render without crashing', () => {
  shallow(<Calculator />);
});

it('should append left operands to display', () => {
  const wrapper = shallow(<Calculator />);
  const sevenButton = wrapper.find('button').at(4);
  const mockValue = {
    target: {
      value: '7'
    }
  };

  simulateClick(sevenButton, mockValue);
  simulateClick(sevenButton, mockValue);

  expect(wrapper.state().display).toEqual('77');
});

it('should set + operator to display', () => {
  const wrapper = shallow(<Calculator />);
  const sevenButton = wrapper.find('button').at(4);
  const plusButton = wrapper.find('.operator').at(3);
  const mockValue = {
    target: {
      value: '7'
    }
  };
  const mockPlus = {
    target: {
      value: operators.ADD
    }
  };

  simulateClick(sevenButton, mockValue);
  simulateClick(plusButton, mockPlus);

  expect(wrapper.state().display).toEqual('7+');
  expect(wrapper.state().operator).toEqual('+');
});

it('should set - operator to display', () => {
  const wrapper = shallow(<Calculator />);
  const sevenButton = wrapper.find('button').at(4);
  const minusButton = wrapper.find('.operator').at(3);
  const mockValue = {
    target: {
      value: '7'
    }
  };
  const mockMinus = {
    target: {
      value: operators.SUBTRACT
    }
  };

  simulateClick(sevenButton, mockValue);
  simulateClick(minusButton, mockMinus);

  expect(wrapper.state().display).toEqual('7-');
  expect(wrapper.state().operator).toEqual('-');
});

it('should set ÷ operator to display', () => {
  const wrapper = shallow(<Calculator />);
  const sevenButton = wrapper.find('button').at(4);
  const divideButton = wrapper.find('.operator').at(3);
  const mockValue = {
    target: {
      value: '7'
    }
  };
  const mockDivide = {
    target: {
      value: operators.DIVIDE
    }
  };

  simulateClick(sevenButton, mockValue);
  simulateClick(divideButton, mockDivide);

  expect(wrapper.state().display).toEqual('7÷');
  expect(wrapper.state().operator).toEqual('/');
});

it('should set × operator to display', () => {
  const wrapper = shallow(<Calculator />);
  const sevenButton = wrapper.find('button').at(4);
  const multipleButton = wrapper.find('.operator').at(3);
  const mockValue = {
    target: {
      value: '7'
    }
  };
  const mockMultiply = {
    target: {
      value: operators.MULTIPLY
    }
  };

  simulateClick(sevenButton, mockValue);
  simulateClick(multipleButton, mockMultiply);

  expect(wrapper.state().display).toEqual('7×');
  expect(wrapper.state().operator).toEqual('*');
});

it.skip('should append decimal properly', () => {
});

it.skip('should handle percent calculation', () => {
});

it('should display result of addition', () => {
  const wrapper = shallow(<Calculator />);
  const sevenButton = wrapper.find('button').at(4);
  const plusButton = wrapper.find('.operator').at(3);
  const equalButton = wrapper.find('.operator').at(4);
  const mockValue = {
    target: {
      value: '7'
    }
  };
  const mockPlus = {
    target: {
      value: operators.ADD
    }
  };
  const mockEqual = {
    target: {
      value: operators.EQUAL
    }
  };

  simulateClick(sevenButton, mockValue);
  simulateClick(plusButton, mockPlus);
  simulateClick(sevenButton, mockValue);

  expect(wrapper.state().left).toEqual(7);
  
  simulateClick(equalButton, mockEqual);
  
  expect(wrapper.state().left).toEqual(14);
  expect(wrapper.state().display).toEqual('14');
});

it('should display result of subtraction', () => {
  const wrapper = shallow(<Calculator />);
  const sevenButton = wrapper.find('button').at(4);
  const minusButton = wrapper.find('.operator').at(3);
  const equalButton = wrapper.find('.operator').at(4);
  const mockValue = {
    target: {
      value: '7'
    }
  };
  const mockMinus = {
    target: {
      value: operators.SUBTRACT
    }
  };
  const mockEqual = {
    target: {
      value: operators.EQUAL
    }
  };

  simulateClick(sevenButton, mockValue);
  simulateClick(sevenButton, mockValue);
  simulateClick(minusButton, mockMinus);
  simulateClick(sevenButton, mockValue);

  expect(wrapper.state().left).toEqual(77);
  
  simulateClick(equalButton, mockEqual);
  
  expect(wrapper.state().left).toEqual(70);
  expect(wrapper.state().display).toEqual('70');
});

it('should display result of division', () => {
  const wrapper = shallow(<Calculator />);
  const sevenButton = wrapper.find('button').at(4);
  const divideButton = wrapper.find('.operator').at(3);
  const equalButton = wrapper.find('.operator').at(4);
  const mockValue = {
    target: {
      value: '7'
    }
  };
  const mockDivide = {
    target: {
      value: operators.DIVIDE
    }
  };
  const mockEqual = {
    target: {
      value: operators.EQUAL
    }
  };

  simulateClick(sevenButton, mockValue);
  simulateClick(sevenButton, mockValue);
  simulateClick(divideButton, mockDivide);
  simulateClick(sevenButton, mockValue);

  expect(wrapper.state().left).toEqual(77);
  
  simulateClick(equalButton, mockEqual);
  
  expect(wrapper.state().left).toEqual(11);
  expect(wrapper.state().display).toEqual('11');
});

it('should display result of multiplication', () => {
  const wrapper = shallow(<Calculator />);
  const sevenButton = wrapper.find('button').at(4);
  const divideButton = wrapper.find('.operator').at(3);
  const equalButton = wrapper.find('.operator').at(4);
  const mockValue = {
    target: {
      value: '7'
    }
  };
  const mockMultiply = {
    target: {
      value: operators.MULTIPLY
    }
  };
  const mockEqual = {
    target: {
      value: operators.EQUAL
    }
  };

  simulateClick(sevenButton, mockValue);
  simulateClick(divideButton, mockMultiply);
  simulateClick(sevenButton, mockValue);

  expect(wrapper.state().left).toEqual(7);
  
  simulateClick(equalButton, mockEqual);
  
  expect(wrapper.state().left).toEqual(49);
  expect(wrapper.state().display).toEqual('49');
});

it('should clear state when all clear clicked', () => {
  const wrapper = shallow(<Calculator />);
  const clearButton = wrapper.find('.button').at(0);
  const sevenButton = wrapper.find('button').at(4);
  const divideButton = wrapper.find('.operator').at(3);
  const equalButton = wrapper.find('.operator').at(4);
  const mockValue = {
    target: {
      value: '7'
    }
  };
  const mockMultiply = {
    target: {
      value: operators.MULTIPLY
    }
  };
  const mockEqual = {
    target: {
      value: operators.EQUAL
    }
  };

  simulateClick(sevenButton, mockValue);
  simulateClick(divideButton, mockMultiply);
  simulateClick(sevenButton, mockValue);

  expect(wrapper.state().left).toEqual(7);
  
  simulateClick(equalButton, mockEqual);
  
  expect(wrapper.state().left).toEqual(49);
  expect(wrapper.state().display).toEqual('49');
  
  simulateClick(clearButton, mockValue);

  expect(wrapper.state().left).toBe(null);
  expect(wrapper.state().operator).toBe(null);
  expect(wrapper.state().display).toEqual('0');
});

it.skip('should clear the last character when backspace clicked', () => {
});
