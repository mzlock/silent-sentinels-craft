<?php
/**
 * Gif to Jif plugin for Craft CMS
 *
 * Gif to Jif Twig Extension
 *
 * --snip--
 * Twig can be extended in many ways; you can add extra tags, filters, tests, operators, global variables, and
 * functions. You can even extend the parser itself with node visitors.
 *
 * http://twig.sensiolabs.org/doc/advanced.html
 * --snip--
 *
 * @author    Benjamin Modayil
 * @copyright Copyright (c) 2017 Benjamin Modayil
 * @link      www.modayil.me
 * @package   GifToJif
 * @since     1
 */

namespace Craft;

use Twig_Extension;
use Twig_Filter_Method;

class GifToJifTwigExtension extends \Twig_Extension
{
    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return 'GifToJif';
    }

    /**
     * Returns an array of Twig filters, used in Twig templates via:
     *
     *      {{ 'something' | someFilter }}
     *
     * @return array
     */
    public function getFilters()
    {
        return array(
            'gifToJif' => new \Twig_Filter_Method($this, 'textConverter'),
        );
    }

    /**
     * Returns an array of Twig functions, used in Twig templates via:
     *
     *      {% set this = someFunction('something') %}
     *
     * @return array
     */
    public function getFunctions()
    {
        return array(
            'gifToJif' => new \Twig_Function_Method($this, 'textConverter'),
        );
    }

    /**
     * Our function called via Twig; it can do anything you want
     *
      * @return string
     */
    public function textConverter($text = null)
    {
        return str_replace('gif', 'jif', $text);
    }
}