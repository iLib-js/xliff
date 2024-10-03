/**
 * Return value of a specified attribute from a supplied xml element converted
 * to a string. If the attribute is not found, undefined is returned.
 *
 * @param {import("ilib-xml-js").Element | undefined} element
 * @param {string} attrName
 * @returns {string | undefined}
 */
export const getAttribute = (element, attrName) => {
    const value = element?.attributes?.[attrName];
    if (value) {
        return String(value);
    } else {
        return undefined;
    }
};

/**
 * Return value of the first text element from a supplied xml element converted
 * to a string. If the text element is not found, undefined is returned.
 *
 * @param {import("ilib-xml-js").Element | undefined} element
 * @returns {string | undefined}
 */
export const getText = (element) => {
    if (!element) {
        return undefined;
    }
    const textElement = element.elements?.find((e) => e.type === "text");
    if (textElement) {
        return String(textElement.text ?? "");
    } else {
        return undefined;
    }
};

/**
 * Return array of elements with a specified name from a supplied xml element
 * or undefined if the element is not found or has no children.
 *
 * @param {import("ilib-xml-js").Element | undefined} element
 * @param {string} elName
 * @returns {import("ilib-xml-js").Element[] | undefined} 
 */
export const getChildrenByName = (element, elName) => {
    return element?.elements?.filter((e) => e.name === elName);
};