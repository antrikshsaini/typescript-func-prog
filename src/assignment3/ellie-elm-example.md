## Elm example which works fine in Ellie

#### Need to import some packages
Copy and paste code in Ellie then import packages from side navigation

```elm

module Main exposing (main)

import Either
import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)
import String.Graphemes exposing (length)


type alias Model =
    { count : Int , message : String }


initialModel : Model
initialModel =
    { count = 0 , 
      message = "Press Button SHOW"
    }


type Msg a b
    = Increment
    | Decrement
    | Ok a
    | Message b
    

update : (Msg Int String) -> Model -> Model
update msg model =
    case msg of
        Increment ->
            { model | count = model.count + 1 }

        Decrement ->
            { model | count = model.count - 1 }
        Ok x ->
            { model | count = model.count + x }
        Message b ->
            { model | message = b, count = model.count + length b }

view : Model -> Html (Msg Int String)
view model =
    div []
        [ button [ onClick Increment ] [ text "+1" ]
        , div [] [ text <| String.fromInt model.count ]
        , div [] [ text <| model.message ]
        , button [ onClick Decrement ] [ text "-1" ]
        , button [ onClick ( Ok 2 ) ] [ text "Add 2" ]
        , button [ onClick ( Message "Hello World" ) ] [ text "Show" ]
        ]


main : Program () Model (Msg Int String)
main =
    Browser.sandbox
        { init = initialModel
        , view = view
        , update = update
        }

```