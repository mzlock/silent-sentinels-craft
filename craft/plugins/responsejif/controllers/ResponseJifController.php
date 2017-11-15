<?php
/**
 * Response Jif plugin for Craft CMS
 *
 * ResponseJif Controller
 *
 * @author    Benjamin Modayil
 * @copyright Copyright (c) 2017 Benjamin Modayil
 * @link      www.modayil.me
 * @package   ResponseJif
 * @since     1
 */

namespace Craft;

class ResponseJifController extends BaseController
{

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     * @access protected
     */
    protected $allowAnonymous = true;
    
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->requirePostRequest();
    }

    public function actionGetJif()
    {   
        //gets value that the user submitted (1 value)
        $key = craft()->request->getPost('pickJif', null);

        // // gets url from what was set in Craft settings
        $jif = craft()->responseJif->getJif($key);

        // // setting a variable to the selected url after submit
        craft()->urlManager->setRouteVariables(array(
            'jifUrl' => $jif
        ));

        $this->redirectToPostedUrl();
    }
}